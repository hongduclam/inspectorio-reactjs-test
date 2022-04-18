import React, {FC} from 'react';
import {Alert, Avatar, List, Skeleton} from 'antd'
import {useGetUserDetail} from "../../../api/useUserApis";
import {useParams} from 'react-router-dom'

interface HomePageProps {
}

const PersonPage: FC<HomePageProps> = () => {
  const {userId} = useParams<{userId: string}>()
  const {
    data: user,
    error
  } = useGetUserDetail(userId);
  return (<>
    {
      error && <Alert message={'Something went wrong!'} type="error" />
    }
    {
      !user && !error && <Skeleton />
    }
    {
      user && <>
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={[user]}
          renderItem={item => (
            <List.Item
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar_url} />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.location}
              />
            </List.Item>
          )}
        />
      </>
    }
  </>);
};

export default PersonPage;

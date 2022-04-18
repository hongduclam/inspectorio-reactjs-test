import React, {FC, useMemo, useCallback} from 'react';
import {Button} from 'antd'
import {useHistory} from 'react-router-dom'

interface HomePageProps {
}

const HomePage: FC<HomePageProps> = () => {
  // const {
  //   data: users,
  //   error
  // } = useGetAllUsers();
  const history = useHistory();
  const onUserClick = useCallback((user: string) => {
    history.push(`/${user}`)
  }, [])

  const topFiveUsers = useMemo(() => {
    return ["GrahamCampbell","fabpot","weierophinney","rkh","josh"]
  }, [])

  return (<>
    {
      topFiveUsers && <>
        <h1>
          Top 5 GitHub Users
        </h1>
        <p>
          Tap the username to see more information
        </p>
        <div>
          {
            topFiveUsers.map(user => {
              return <Button onClick={() => onUserClick(user)} style={{margin: 8}} type="primary" key={user}>{user}</Button>
            })
          }
        </div>
      </>
    }
  </>);
};

export default HomePage;

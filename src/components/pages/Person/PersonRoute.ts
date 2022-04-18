import {lazy} from 'react'
import {RouteParams} from "../../../types";

export const PersonRoute: RouteParams = {
  path: '/:userId',
  pageTitle: 'Person',
  exact: true,
  goBackPath: '/',
  component: lazy(() => import('./PersonPage'))
}

import {lazy} from 'react'
import {RouteParams} from "../../../types";

export const HomeRoute: RouteParams = {
  path: '/',
  pageTitle: 'Home',
  exact: true,
  component: lazy(() => import('./HomePage'))
}

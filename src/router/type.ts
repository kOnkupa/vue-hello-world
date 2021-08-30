import { RouteRecordRaw } from 'vue-router'

export type RouterProps = RouteRecordRaw & {
  name: string
  exact?: boolean
  show?: boolean
}

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './index.css'
import { Auth0 } from '@/auth'
import VueAxios from 'vue-axios'
import axiosInstance from '@/utils/axios'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { LicenseManager } from '@ag-grid-enterprise/core'

LicenseManager.setLicenseKey(
  'CompanyName=Jayden Digital Limited,LicensedGroup=Jayden Digital Limited,LicenseType=MultipleApplications,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=0,AssetReference=AG-012310,ExpiryDate=8_December_2021_[v2]_MTYzODkyMTYwMDAwMA==188b271bb4c957ff03674eab5d86d6e0'
)

async function init() {
  const AuthPlugin = await Auth0.init({
    onRedirectCallback: (appState) => {
      router.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname)
    },
    clientId: process.env.VUE_APP_AUTH0_CLIENT_ID,
    domain: process.env.VUE_APP_AUTH0_DOMAIN,
    audience: process.env.VUE_APP_AUTH0_AUDIENCE,
    redirectUri: window.location.origin,
    // redirectUri: 'http://localhost:8080',
  })
  const app = createApp(App)

  app.use(AuthPlugin).use(VueAxios, axiosInstance).use(router).mount('#app')
}

init()

/**
 * 文件功能描述：
 * 用户进来的路径不一样，就返回不一样的html
 */
import createApp from './create-app'

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    router.push(context.url)
    router.onReady(()=>{
      const matchedComponents = router.getMatchedComponents()
      if(!matchedComponents){
        return reject(new Error('no components matched'))
      }
      context.meta = app.$meta()
      resolve(app)
    })

  })
}
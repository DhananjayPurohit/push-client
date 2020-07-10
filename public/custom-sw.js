self.addEventListener('push', event => {
    const data = event.data.json()
    console.log('New notification', data)
    const options = {
      body: data.body,
      actions: data.actions
    }
    console.log(options)
    console.log(Notification.maxActions)
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  })
  
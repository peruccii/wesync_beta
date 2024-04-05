type notificationProps = {
 error: (msg: string) => void,
 warn: (msg: string) => void,
 success: (msg: string) => void,
}

export const useNotification = (notification: notificationProps) => {
 const error = notification.error
 const warn = notification.warn
 const success = notification.success
 return { error, warn, success }
}
interface ContactNotificationProps {
  name: string
  email: string
  message: string
}

export function ContactNotification({
  name,
  email,
  message,
}: ContactNotificationProps) {
  return (
    <div>
      <h2>New project request from {name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p>{message}</p>
    </div>
  )
}
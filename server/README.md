## API Routes
| Routes | Methods | Description |
| ------ | ------- | ----------- |
| `/v1/register` | `GET` | Get all the registration. Access to only admin |
| `/v1/verify/:id` | `GET` | Verify registration email |
| `/v1/send-verification-link/:email` | `GET` | Send verfication email to the registered email |
| `v1/register/:event_id` | `POST` | Submit a registration to specific event |
| `v1/event` | `POST` | Add an event |
| `v1/leaderboard` | `POST` | Add team and ranking to leader board. Access only to admin |


## TODO
1. Add Admin cookie middleware [x]
2. Admin Panel API
3. verification mail
4. Sign in with google

## Done
1. (2.10.23)
    - Admin sign up, login, User model, middleware to verify admin.
This a simple app consisting of a client side made with react and a server side made with node.js

When launched, a welcome page is displayed along with a login button. When pressed this button opens a metamask pop-up, 
if metamask is installed, and tells you to login and sign a message.
After that an acces button appears, along with your metamask address. When pressed this button sends to the node server,
the message you signed, the signature and you walletaddress. It then checks wheter the address it was given is the signer
of the message. If so, the server generates a JWT. The JWT is sent to the frontend and you are logged in a page that just says:
You've been logged in.

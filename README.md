# Online Shop mock-up

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It has 5 branches of which 3 are relevant to my development. In this e-shop I used React with useContext (first branch), then Redux with Thunk (second branch) and Redux with Saga (third branch). For styling I used SCSS. I chose SCSS and not SASS as I find the syntax more readable. 

The most complex branch can be visited [here](https://revolut-merchant-test-shop.netlify.app/) - redux for state management, react for components, serverless functions as backend and firebase as database

## What I have learned

It has been a very good opportunity to better understand and deep dive into the React framework, React hooks (useState, useEffect, useContext, useNavigate, useParams, useLocation, useMemo) and the way it works with Redux. I also learned how to use React-Router, middleware like thunk (which I loved btw as it basically allows you to make backend calls before updating your website's state) or Saga (can't say I am a big fan as it looks to overcomplicate the website). Also upskilled my styling skills by using SCSS (was only familiar with vanilla CSS).

Also added the [Revolut Pay checkout SDK](https://developer.revolut.com/docs/sdks/revolut-checkout-js/initialize-widget/revolut-checkout-payments/revolut-checkout-payments-revolut-pay2) which needed me to develop a backend side to this project, as the SDK uses an API KEY in order to make the payment work. Of course this API_KEY can't be sent from the FE as it would be bad practice.

For the backend I used node.js with Express. It is not very complex. Just built some routes in order to make the merchant API from Revolut work to create orders and track order state.
The website was published on netlify and can be visited [here](https://revolut-merchant-test-shop.netlify.app/) (not yet mobile friendly but hoping to make it soon). To make the backend part work as well, I transfered the backend side of the app on the serverless function functionality offered on netlify. The repository for the published website can be seen [here](https://github.com/cmihaescu/clothing-shop-redux-thunk-serverless-functions/tree/master)

I can only say it has been very exciting and fulfilling to work on this repository!


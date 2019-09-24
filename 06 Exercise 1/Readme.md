# Challenge 1

## Starting material:

In our application we have need to load tons collections from servers (usually lookups), and the server rest-api comes from a third party, fork the sake of performance:

- We don't want to load all the enums at application startup.
- We dont' want to load the enum on every request.
- We want to be lazy, load it one time and keep it globally in context

## Startup

- Copy `00-start` project folder.
- Run `npm install`.
- Run `npm start` and implement the challenge.

## Tips

A. Make it global:

  - Move the lookup data to context.
  - Create a hook that has Access to this context and exposes a loadMethod.
  - Use the hook on PageA and PageB.

B. Make it lazy:

  - Just add a state on the custom hook you have created to check if the lookup has been already loaded, and depending on the result just return the promise resolved with the data if not fire the async request.

C. Extra:
  - what if we can launch in parallel several request at the same for the same lookup? Could we just store the first promise launched and return that? 

# About Basefactor + Lemoncode

We are an innovating team of Front End Developers, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend

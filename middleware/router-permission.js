export default ({ route, redirect }) => {
  //* route.matched 取不到 meta
  console.log('[middleware][router-permission]', route.meta);

  const isLoggedIn = false;
  const auth = route.meta[0].auth;

  if (auth === true && !isLoggedIn) {
    redirect({ name: 'index' });
  } else if (auth === true && isLoggedIn) {
    redirect({ name: 'index' });
  }
};

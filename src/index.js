class Router {
  constructor(routes) {
    this.routes = routes;
  }

  serve(path) {
    try {
      const route = this.routes.filter((el) => el.path === path);
      return route[0].handler;
    } catch {
      throw new Error('Error');
    }
  }
}

export default (routes) => {
  return new Router(routes);
};

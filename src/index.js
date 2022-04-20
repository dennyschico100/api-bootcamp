const app = require('./app');

const main = () => {
  app.listen(app.get('PORT'), () => {
    console.log(`running on ${app.get('PORT')}`);
  });
};
main();

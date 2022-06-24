const Koa = require('koa');
const { exec } = require('child_process');
const app = new Koa();

function getLogs() {
  return new Promise(resolve => {
    exec("cat /var/log/auth.log | grep 'New session'", (err, stdout, stderr) => { 
      resolve(stdout);
    });
  });
}

app.use(async ctx => {
    ctx.body = await getLogs();
});

app.listen(8080);

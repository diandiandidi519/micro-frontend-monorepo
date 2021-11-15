const childProcess = require('child_process');
const path = require('path');

const filePath = {
  vue2: {
    path: path.join(__dirname, 'apps/vue2'),
    cmd: 'rushx start',
  },
  vue3: {
    path: path.join(__dirname, 'apps/vue3'),
    cmd: 'rushx start',
  },
  react15: {
    path: path.join(__dirname, 'apps/react15'),
    cmd: 'rushx start',
  },
  react16: {
    path: path.join(__dirname, 'apps/react16'),
    cmd: 'rushx start',
  },
};

function runChild() {
  Object.keys(filePath).forEach((item) => {
    childProcess.spawn(`cd ${filePath[item].path} && ${filePath[item].cmd}`, {
      stdio: 'inherit',
      shell: true,
    });
  });
}

runChild();

const { spawn } = require("child_process");

const child = spawn('cmd.exe',['/c', 'dir'])

child.stdout.on('data',(data)=>{console.log(`stdout: ${data}`);
})

child.stderr.on('data',(data)=>{console.log(`stderr:${data}`);
})

child.on('close', (code)=>{console.log(`child process ended with code: ${code}`);
})
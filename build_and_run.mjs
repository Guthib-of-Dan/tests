import {arch, platform} from "node:os";
import {exec} from "node:child_process";
import {log} from "node:console";
var compiler = platform() == "darwin" ? "clang++" : "g++";
exec(compiler + " -s -O3 -o " + "./binary.exe" + " main.cpp", (err, stdout, stderr)=>{
  log("ERR", err);
  log("stdout: ", stdout);
  log("stderr: ", stderr);
  log("START BUILD");
  exec("./binary.exe", (err, stdout, stderr)=>{
    log("ERR", err);
    log("stdout: ", stdout);
    log("stderr: ", stderr);
  })
})



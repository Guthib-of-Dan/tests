import {arch, platform} from "node:os";
import {exec} from "node:child_process";
import {log} from "node:console";
var output = platform() + '-' + arch() + ".exe";
var compiler = platform() == "darwin" ? "clang++" : "g++";
exec(compiler + " -s -O3 -o " + output + " main.cpp", (err, stdout, stderr)=>{
  log("ERR", err);
  log("stdout: ", stdout);
  log("stderr: ", stderr);
  log("START BUILD");
  exec("./" + output, (err, stdout, stderr)=>{
    log("ERR", err);
    log("stdout: ", stdout);
    log("stderr: ", stderr);
  })
})



import {arch, platform} from "node:os"
import {log} from "node:console";
log(platform(), arch());

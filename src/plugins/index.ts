import Hash from "./hash";
import { Root } from "./lib";
import Navigation from "./navigation";
import Pages from "./page";
import Repository from "./repository";
import Route from "./route";
import Socketio from "./socket";

export default class Plugins extends (Hash(Navigation(Repository(Route(Pages(Root)))))) {}
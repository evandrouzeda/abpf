import App from "./app";
import Root from "./pages/root";
import RepositoryApiSQL from "./repository/apiSQL";
import RepositoryEmpty from "./repository/empty";
import RepositorySocket from "./repository/socket";

const app = new App()
app.setRepository(new RepositoryApiSQL())
    .setNavgation({}, Root, app)
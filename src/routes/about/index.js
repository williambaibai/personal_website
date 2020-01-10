import * as Navi from 'navi'
import 'bootstrap/dist/css/bootstrap.min.css';

export default Navi.route({
  title: "About",
  getView: () => import('./document.mdx'),
})
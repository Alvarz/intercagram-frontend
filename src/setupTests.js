import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
// import localStorage from 'mock-local-storage'

global.window = {}
// window.localStorage = global.localStorage

configure({ adapter: new Adapter() })

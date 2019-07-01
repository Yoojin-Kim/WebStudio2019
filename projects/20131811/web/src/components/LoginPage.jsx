import React from 'react'
import { Form, Divider } from 'antd'
import { LoginForm } from './LoginForm'
import RegisterForm  from './RegisterForm'
import { history } from './history'
import withMiddle from '../components/withMiddle'
import Head from './Head'

import classNames from 'classnames/bind'
import styles from './LoginPage.module.scss'
const cx = classNames.bind(styles)


class LoginPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoginPage: history.location.pathname === '/login',
      isRegisterPage: history.location.pathname === '/register',
    }
    this.WrappedLoginForm = Form.create()(LoginForm)
    this.WrappedRegisterForm = Form.create()(RegisterForm)
  }

  changeLocation = () => {
    this.setState({
      isLoginPage : !this.state.isLoginPage,
      isRegisterPage : !this.state.isRegisterPage
    })
    console.log('change location')
  }


  render() {
    const WrappedLoginForm = this.WrappedLoginForm
    const WrappedRegisterForm = this.WrappedRegisterForm
    return (
      <React.Fragment>
        <br/>
        <br/>
        <Head />
        {this.state.isLoginPage && (
          <div className={cx('login')}>
            <h1>Login</h1>
            <h2>Web Studio 2019</h2>
            <Divider style={{ margin: '10px 0' }} />
            <WrappedLoginForm callbackFromParent={this.changeLocation}/>
          </div>
        )}
        {this.state.isRegisterPage && (
          <div className={cx('login')}>
            <h1>REGISTER</h1>
            <h2>Web Studio 2019</h2>
            <Divider style={{ margin: '10px 0' }} />
            <WrappedRegisterForm callbackFromParent={this.changeLocation}/>
          </div>
        )}
      </React.Fragment>
    )
  }
}

const withMiddleLoginPage = withMiddle(LoginPage, {
  styles: {
    backgroundImage: 'linear-gradient(180deg,#2b2f48,#1d1f31)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
})

export { withMiddleLoginPage as LoginPage }
export default LoginPage;
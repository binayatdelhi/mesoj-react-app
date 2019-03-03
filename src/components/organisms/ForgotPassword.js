import React, {Component} from 'react';
import Button from '../atoms/Button';
import Link from '../atoms/Link';

export default class ForgotPassword extends Component {
	constructor(props) {
		super();
		document.getElementById('body').classList = 'theme--light';
	}
	render() {
		return (
			<div className='col-12 d-flex align-items-center justify-content-center'>
				<div className='uxt-panel uxt-form--forgotPassword'>
					<h2 className='heading-secondary mb-4'>Forgot your password?</h2>
					<form className='uxt-form' method='POST' action='/dashboard'>
						<div className='form-group'>
							<label className='uxt-form--label' htmlFor='email'>
								Email address
							</label>
							<input
								type='email'
								className='form-control uxt-form--input'
								id='email'
								aria-describedby='emailHelp'
								placeholder='youremail@domain.com'
							/>
						</div>
						{/* TODO: Button Loading state with three animated dots */}
						<div className='form-group text-center mb-5'>
							<Button type='submit' value='Request Reset Link' primary block />
						</div>
					</form>
					<div className='text-center'>
						<p className='txt-secondary m-0'>
							Back to Sign in? <Link text='Sign In' cssClass='txt-secondary' href='/#' />
						</p>
					</div>
				</div>
			</div>
		);
	}
}

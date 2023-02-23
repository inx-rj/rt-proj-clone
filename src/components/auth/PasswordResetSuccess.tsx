import { Link } from 'react-router-dom';
import { Images } from '../../helper/images';
import { SYSTEM } from '../../routes/baseRoute';
import Button from '../common/button/Button';

const PasswordResetSuccess = () => {
  return (
    <>
      <div className="max-w-xs my-0 mx-auto space-y-4">
        <img src={Images.ResetPasswordSuccess} />
        <h3 className="text-center">Hurray! Password Changed Successfully</h3>
      </div>
      <Link to={SYSTEM.AUTH}>
      <Button type="button" className="mt-4 w-full btn btn-primary" text="Log In" />
      </Link>
    </>
  );
}

export default PasswordResetSuccess;
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/herokuappOperations';
import {
  UserSpan,
  UserParagrapher,
  UserWrapper,
  LogOutBtn,
} from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  return (
    <UserWrapper>
      <UserParagrapher>
        <UserSpan>{user.name[0].toUpperCase()}</UserSpan> {user.name}
      </UserParagrapher>
      <LogOutBtn type="button" onClick={() => dispatch(logOut())}>
        Log out
      </LogOutBtn>
    </UserWrapper>
  );
};

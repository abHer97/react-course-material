import { BtnCircle } from '../../../components/buttons/btn-circle';
import { ButtonContainer } from '../../../components/buttons/button-container';
import { IconHeartSolid, IconRectangleListSolid } from '../../../components/icons/icons';

export function TvShowButtons() {
  return (
    <div className='flex flex-row gap-2'>
      <ButtonContainer>
        <BtnCircle>
          <IconHeartSolid className='text-white' />
        </BtnCircle>
      </ButtonContainer>
      <ButtonContainer>
        <BtnCircle>
          <IconRectangleListSolid className='text-white' />
        </BtnCircle>
      </ButtonContainer>
    </div>
  );
}

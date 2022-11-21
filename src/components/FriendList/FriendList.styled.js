import styled from '@emotion/styled';
export const FriendSection = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  width: ${p => p.theme.space[8]}px;
`;
export const FriendListItem = styled.li`
  display: flex;
  align-items: center;

  border: ${p => p.theme.borders.normal};
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.15);
  border-radius: ${p => p.theme.radii.normal};
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
`;
export const StatusOnline = styled.span`
  margin-right: ${p => p.theme.space[4]}px;
  width: 20px;
  height: 20px;
  border-radius: ${p => p.theme.radii.round};
  background-color: red;
  ${({ isOnline }) => {
    if (isOnline) {
      return `
         background-color: green; `;
    }
  }}
`;
export const FriendAvatar = styled.img`
  margin-right: ${p => p.theme.space[4]}px;
`;

export const FriendName = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s};
`;

import * as S from './styles';

export function Main({
  title = 'Next.js Boilerplate',
  description = 'Initial boilerplate for Next.js with TypeScript projects',
}) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </S.Wrapper>
  );
}

import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  .skills-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 15px;
  }

  .skills-category {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;
    margin-bottom: 8px;
  }

  .skills-text {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--slate);
    line-height: 1.5;
    margin: 0 0 15px 0;
  }

  @media (max-width: 768px) {
    .skills-container {
      grid-template-columns: 1fr;
    }

    .skills-text {
      font-size: var(--fz-sm);
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // Core skills by category
  const skills = {
    languages: ['TypeScript', 'JavaScript', 'Python', 'Go'],
    backend: [
      'Node.js',
      'NestJS',
      'Express.js',
      'Fastify',
      'FastAPI',
      'GraphQL',
      'REST APIs',
      'WebSockets',
      'PostgreSQL',
      'MongoDB',
      'TimescaleDB',
      'Redis',
      'Kafka',
      'Deepstream',
      'Socket.IO',
      'Sequelize',
      'TypeORM',
      'OAuth 2.0',
      'OpenID Connect',
      'Ory Kratos',
      'Ory Hydra',
      'Microservices',
      'Distributed Systems',
    ],
    devops: [
      'AWS (EC2, RDS, S3, SES)',
      'Docker',
      'Kubernetes',
      'Terraform',
      'GitHub Actions',
      'Buildkite',
      'Caddy',
      'Nginx',
      'Firebase',
      'Supabase',
      'LangChain',
    ],
    frontend: [
      'React',
      'Next.js',
      'React Native',
      'Flutter',
      'TailwindCSS',
      'Redux',
      'Redux Saga',
      'React Query',
      'Zustand',
      'Material UI',
      'Styled Components',
    ],
  };

  // No need to combine all skills as we're displaying them by category

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Senior Software Engineer and Technical Lead with nearly 8 years building backend and
              full-stack systems in Node.js and TypeScript, with experience leading teams from small
              squads to 20+ engineers. Comfortable owning a system end to end, from API design and
              data modelling through infrastructure as code, CI/CD and production.
            </p>

            <p>
              Currently leading a team at <a href="https://www.thoughtworks.com/">Thoughtworks</a>{' '}
              on a logistics platform for Apple. Previously Technical Lead at{' '}
              <a href="https://gluelabs.com/">Glue Labs</a>, taking four products from zero to
              production. Also built and operate <a href="https://dashgen.in">Dashgen</a>, a
              multi-provider LLM platform, solo.
            </p>

            <p>Here are the technologies I've been working with:</p>
          </div>

          <div className="skills-container">
            <div>
              <h3 className="skills-category">Languages</h3>
              <p className="skills-text">{skills.languages.join(', ')}</p>
            </div>

            <div>
              <h3 className="skills-category">Backend</h3>
              <p className="skills-text">{skills.backend.join(', ')}</p>
            </div>

            <div>
              <h3 className="skills-category">Cloud & DevOps</h3>
              <p className="skills-text">{skills.devops.join(', ')}</p>
            </div>

            <div>
              <h3 className="skills-category">Frontend</h3>
              <p className="skills-text">{skills.frontend.join(', ')}</p>
            </div>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/Aryan_new.JPG"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;

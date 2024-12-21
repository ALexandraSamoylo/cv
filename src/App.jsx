import React from 'react';
import {
  Box,
  Typography,
  Link,
  Grid,
  Divider,
  Button,
  Avatar,
} from '@mui/material';
import myPhoto from './assets/my-photo.jpg';
import lamodaGif from './assets/lamoda.gif';
import notionGif from './assets/notion.gif';

const Resume = () => {
  const projects = [
    {
      title: 'Lamoda',
      description: 'Protoype of usual shopping app.',
      imageUrl: lamodaGif,
      githubLink: 'https://alexandrasamoylo.github.io/lamoda/',
    },
    {
      title: 'Notion',
      description: 'Notion app with multifunctional UI.',
      imageUrl: notionGif,
      githubLink: 'https://github.com/ALexandraSamoylo/notion',
    },
  ];

  const author = {
    name: 'Samoylo Alexandra',
    profession: 'Frontend Developer',
    education:
      'Higher Education, Belarusian State University (Math and computer science, 2027)',
    englishLevel: 'C1',
    russianLevel: 'C2',
    email: 'ssamoylo46@gmail.com',
    linkedin: 'https://www.linkedin.com/in/alexandra-samoylo-824878337/',
    telegram: 'https://t.me/sanechek02',
    photoUrl: myPhoto,
  };

  const skills = [
    'JavaScript',
    'React, Redux',
    'HTML, CSS, SASS',
    'Material-UI, Tailwind CSS',
    'Git, GitHub',
    'ZOD',
    'Vite',
    'C++, SQL',
    'Adobe Photoshop',
  ];

  const workExperience = [
    {
      title: 'Self-Employment (Freelance)',
      duration: 'Jan 2024 – Present',
      description:
        'Developing websites and web applications for various clients, specializing in React and frontend technologies.',
      details: [
        'Created custom websites and web applications tailored to client requirements.',
        'Ensured responsive and user-friendly designs using modern tools.',
        'Implemented effective debugging and optimization for production-ready apps.',
      ],
    },
    {
      title: 'Belarusian State University (BSU)',
      duration: '2023 – Expected Graduation 2027',
      description: 'Studying Mathematics and Computer Science at BSU.',
      details: [
        'Completed coursework in algorithms, data structures, and software development.',
        'Engaged in academic projects involving C++ and Java programming.',
      ],
    },
  ];

  return (
    <Box
      sx={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f7f7f7',
        color: '#333',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: '#fff',
          padding: '2rem',
          border: '1px solid #ddd',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: '#4a90e2',
                mb: 1,
              }}
            >
              {author.name}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {author.profession}
            </Typography>
          </Box>
          <Avatar
            alt={author.name}
            src={author.photoUrl}
            sx={{
              width: 150,
              height: 150,
              borderRadius: '50%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>

        {/* Contact Information */}
        <Box
          sx={{
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#7b7b7b',
              mb: 2,
            }}
          >
            Contact Information
          </Typography>
          <Typography>
            <strong>Email:</strong>{' '}
            <Link
              href={`mailto:${author.email}`}
              sx={{
                color: '#4a90e2',
              }}
            >
              {author.email}
            </Link>
          </Typography>
          <Typography>
            <strong>LinkedIn:</strong>{' '}
            <Link
              href={author.linkedin}
              target="_blank"
              sx={{
                color: '#4a90e2',
              }}
            >
              Alexandra Samoylo
            </Link>
          </Typography>
          <Typography>
            <strong>Telegram:</strong>{' '}
            <Link
              href={author.telegram}
              target="_blank"
              sx={{
                color: '#4a90e2',
              }}
            >
              @sanechek02
            </Link>
          </Typography>
          <Typography>
            <strong>Languages:</strong> English (C1), Russian (C2)
          </Typography>
        </Box>

        <Divider
          sx={{
            my: 4,
            borderColor: '#e0e0e0',
          }}
        />

        {/* Work Experience */}
        <Box
          sx={{
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#7b7b7b',
            }}
          >
            Work Experience
          </Typography>
          {workExperience.map((experience, index) => (
            <Box
              key={index}
              sx={{
                mb: 3,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                {experience.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {experience.duration}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                }}
              >
                {experience.description}
              </Typography>
              <ul>
                {experience.details.map((detail, idx) => (
                  <li key={idx}>
                    <Typography variant="body2">{detail}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          ))}
        </Box>

        <Divider
          sx={{
            my: 4,
            borderColor: '#e0e0e0',
          }}
        />

        {/* Skills */}
        <Box
          sx={{
            mb: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#7b7b7b',
            }}
          >
            Skills
          </Typography>
          <Grid container spacing={2}>
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    padding: '0.5rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    textAlign: 'center',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f9f9f9',
                  }}
                >
                  <Typography variant="body1">{skill}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Projects */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: '#7b7b7b',
            }}
          >
            Projects
          </Typography>
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box
                  sx={{
                    padding: '1rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                    transition: 'transform 0.2s ease',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#4a90e2',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    style={{
                      width: '100%',
                      borderRadius: '4px',
                      marginBottom: '1rem',
                    }}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    href={project.githubLink}
                    target="_blank"
                    fullWidth
                    sx={{
                      color: '#4a90e2',
                      borderColor: '#4a90e2',
                      '&:hover': {
                        backgroundColor: '#e6f0f9',
                      },
                    }}
                  >
                    Open Project
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;

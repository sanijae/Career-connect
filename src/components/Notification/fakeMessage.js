const fakeMessages = [
    {
      id: '1',
      subject: 'Job Application Update',
      sender: 'company@example.com',
      body: 'We have received your job application and will review it shortly. Thank you for your interest in our company.',
      replies: ['Thank you for the update.'],
    },
    {
      id: '2',
      subject: 'Interview Invitation',
      sender: 'hr@example.com',
      body: 'We would like to invite you for an interview for the Software Engineer position. Please let us know your availability.',
      replies: ['I am available on Monday and Wednesday.'],
    },
    {
      id: '3',
      subject: 'Job Offer',
      sender: 'recruiter@example.com',
      body: 'Congratulations! We are pleased to offer you the position of Product Manager at our company. Please find the attached offer letter.',
      replies: ['Thank you! I have received the offer letter.'],
    },
    {
      id: '4',
      subject: 'Follow-up on Application',
      sender: 'hiringmanager@example.com',
      body: 'We wanted to follow up on your application for the Marketing Specialist role. Are you still interested in the position?',
      replies: ['Yes, I am still interested.'],
    },
    {
      id: '5',
      subject: 'Reference Request',
      sender: 'recruitment@example.com',
      body: 'Could you please provide references for your previous employment? This will help us proceed with your application.',
      replies: ['Sure, I will send the references shortly.'],
    },
  ];
  
  export default fakeMessages;
  
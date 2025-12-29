const getAllMembershipPlans = async () => {
  const plans = [
    {
      name: "Student Membership",
      description: "Designed specifically for school and college students.",
      isPopular: false,
      features: [
        "Affordable annual fee",
        "Access to all basic benefits",
        "Student-focused learning resources",
      ],
    },
    {
      name: "Professional Membership",
      description: "Advanced features for learners focused on career growth.",
      isPopular: true,
      features: [
        "Advanced learning features",
        "Exclusive masterclasses",
        "Career guidance sessions",
      ],
    },
    {
      name: "Premium Membership",
      description: "All-access experience with guaranteed career outcomes.",
      isPopular: false,
      features: [
        "All-access pass",
        "Internship guarantee",
        "Personalized mentorship",
        "Project review & portfolio building",
      ],
    },
  ];

  return plans;
};

export { getAllMembershipPlans };

import type { LabDefinition } from "./types";

export const nginxLab: LabDefinition = {
  id: "broken-nginx-configuration",
  slug: "nginx",
  number: "01",

  title: "Broken Nginx Configuration",

  objective:
    "Diagnose the broken Nginx configuration, make the smallest safe fix, and restore the service.",

  difficulty: "Beginner",

  environment: {
    operatingSystem: "Ubuntu 24.04",
    session: "Active",
  },

  steps: [
    {
      id: 1,
      title: "Look at the problem",
      description:
        "Find out why Nginx stopped working.",
    },
    {
      id: 2,
      title: "Find the mistake",
      description:
        "Locate the broken part of the configuration.",
    },
    {
      id: 3,
      title: "Fix it",
      description:
        "Make the smallest safe change.",
    },
    {
      id: 4,
      title: "Bring it back",
      description:
        "Test the fix and start Nginx again.",
    },
  ],

  successCondition:
    "Nginx configuration passes validation and the service returns to an active state.",

  guidedActions: [
    {
      id: "check-nginx",
      title: "Check Nginx",
      description:
        "See whether the Nginx service is running.",
      icon: "check",
      command: "systemctl status nginx",
    },
    {
      id: "test-config",
      title: "Test configuration",
      description:
        "Check whether the Nginx configuration is valid.",
      icon: "test",
      command: "nginx -t",
    },
    {
      id: "view-config",
      title: "Look at the config",
      description:
        "Read the configuration file causing the problem.",
      icon: "file",
      command:
        "sed -n '35,48p' /etc/nginx/nginx.conf",
    },
  ],
};

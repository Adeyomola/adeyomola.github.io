import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Server, Code, Database, Mail, Cloud, Cpu, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaAws, FaJenkins, FaLinux, FaPython, FaReact, FaDocker, FaTerminal } from 'react-icons/fa';
import { SiKubernetes, SiPrometheus, SiGrafana, SiAnsible, SiTerraform } from 'react-icons/si';

// Updated projects array with your real GitHub repositories and 'link' keys
const projects = [
  {
    title: 'Jenkins DevSecOps Pipeline',
    description: 'DevSecOps Pipeline for a WordPress CMS using Jenkins, deploying to AWS EKS via Terraform. Includes Prometheus, ELK stack, and Trivy image scanning.',
    tech: ['AWS EKS', 'Jenkins', 'Terraform', 'Ansible'],
    link: 'https://github.com/Adeyomola/content-management-system',
    colSpan: 'md:col-span-2 md:row-span-1',
    icon: <Cloud className="text-teal-400 w-8 h-8 mb-4" />
  },
    {
    title: 'Cloud Monitoring',
    description: 'A monitoring, logging and alerting system integrated with Slack',
    tech: ['Prometheus', 'Grafana', 'Python', 'Shell'],
    link: 'https://github.com/Adeyomola/monitoring',
    colSpan: 'md:col-span-1 md:row-span-1',
    icon: <Terminal className="text-teal-400 w-4 h-4 mb-2" />
  },
    {
    title: 'Ansible EC2 Provisioning',
    description: 'Stateful Infrastructure-as-Code for deploying multiple AWS EC2 instances securely behind an Application Load Balancer.',
    tech: ['Ansible', 'AWS EC2', 'ALB', 'YAML'],
    link: 'https://github.com/Adeyomola/ansible-provision-ec2-behind-alb',
    colSpan: 'md:col-span-2 md:row-span-1',
    icon: <Server className="text-teal-400 w-8 h-8 mb-4" />
  },
    {
    title: 'Linux Recycle Bin',
    description: 'A custom shell script providing a functional recycle bin for Linux terminals with 30-day auto-delete and restore capabilities.',
    tech: ['Bash', 'Linux', 'Shell'],
    link: 'https://github.com/Adeyomola/recycle_bin',
    colSpan: 'md:col-span-1 md:row-span-1',
    icon: <Terminal className="text-teal-400 w-4 h-4 mb-2" />
  },
    {
    title: 'Automated LAMP Stack',
    description: 'Ansible playbooks containing custom roles to deploy a highly available LAMP server and PostgreSQL databases on Ubuntu/Debian.',
    tech: ['Ansible', 'PostgreSQL', 'Linux', 'Apache'],
    link: 'https://github.com/Adeyomola/LAMP-Deployment-Ansible',
    colSpan: 'md:col-span-2 md:row-span-1',
    icon: <Database className="text-teal-400 w-8 h-8 mb-4" />
  },
   {
    title: 'Stateful Ansible Deployment',
    description: 'Deploying EC2 instances behind ALB with Ansible with statefulness',
    tech: ['Ansible', 'AWS'],
    link: 'https://github.com/Adeyomola/ansible-provision-ec2-behind-alb',
    colSpan: 'md:col-span-1 md:row-span-1',
    icon: <Database className="text-teal-400 w-4 h-4 mb-2" />
  },
  {
    title: 'Verba CMS Platform',
    description: 'A cloud-native content publishing web application featuring role-based access, image handling, and RESTful APIs.',
    tech: ['Python', 'Flask', 'Docker'],
    link: 'https://github.com/Adeyomola/verba',
    colSpan: 'md:col-span-2 md:row-span-1',
    icon: <Code className="text-teal-400 w-4 h-4 mb-4" />
  },
  {
    title: 'Serverless QR API',
    description: 'API that generates QR codes from provided URLs and securely stores the generated images in an Amazon S3 bucket.',
    tech: ['AWS Lambda', 'Python', 'S3'],
    link: 'https://github.com/Adeyomola/serverless-qr-code-API-AWS-Lambda',
    colSpan: 'md:col-span-1 md:row-span-1',
    icon: <Code className="text-teal-400 w-4 h-4 mb-2" />
  },
   {
    title: 'Microservices Architecture CI/CD',
    description: 'Automating CI/CD for a microservices architecture on Jenkins',
    tech: ['Jenkins', 'Kubernetes', 'Terraform', 'EKS', 'Ansible'],
    link: 'https://github.com/Adeyomola/AWS-EKS-Kubernetes-Jenkins-Terraform',
    colSpan: 'md:col-span-3 md:row-span-1',
    icon: <Cloud className="text-teal-400 w-8 h-8 mb-4" />
  },
];

const writings = [
  {
    title: 'Medium',
    description: 'Cloud, DevOps, SysAdmin',
    tech: ['AWS', 'Terraform', 'Ansible', 'Ubuntu', 'Debian', 'Apache'],
    link: 'https://adeyomoladev.medium.com/',
    colSpan: 'md:col-span-3 md:row-span-1',
    icon: <Cloud className="text-teal-400 w-8 h-8 mb-4" />
  },
    {
    title: 'Baeldung',
    description: 'DevOps, Linux Administration, Database Management',
    tech: ['Docker', 'Linux', 'Scripting', 'Package Management', 'User Administration', 'Network Configuration', 'Kubernetes', 'Git', 'Jenkins'],
    link: 'https://www.baeldung.com/author/adeyomolakazeem',
    colSpan: 'md:col-span-3 md:row-span-1',
    icon: <Terminal className="text-teal-400 w-4 h-4 mb-2" />
  },
    {
    title: 'Cloudwards',
    description: 'Cloud Computing with some focus on SaaS',
    tech: ['AWS', 'Azure', 'DigitalOcean', 'Vultr', 'Google Cloud'],
    link: 'https://www.cloudwards.net/about/adeyomola-kazeem/',
    colSpan: 'md:col-span-3 md:row-span-1',
    icon: <Server className="text-teal-400 w-8 h-8 mb-4" />
  },
]
const skills = [
  { name: "AWS", icon: <FaAws size={20} className="text-teal-500/80" /> },
  { name: "Docker", icon: <FaDocker size={20} className="text-teal-500/80" /> },
  { name: "Jenkins", icon: <FaJenkins size={20} className="text-teal-500/80" /> },
  { name: "Linux", icon: <FaLinux size={20} className="text-teal-500/80" /> },
  { name: "Python", icon: <FaPython size={20} className="text-teal-500/80" /> },
  { name: "React", icon: <FaReact size={20} className="text-teal-500/80" /> },
  { name: "Bash", icon: <FaTerminal size={16} className="text-teal-500/80" /> },
  { name: "Kubernetes", icon: <SiKubernetes size={16} className="text-teal-500/80" /> },
  { name: "Terraform", icon: <SiTerraform size={16} className="text-teal-500/80" /> },
  { name: "Ansible", icon: <SiAnsible size={16} className="text-teal-500/80" /> },
  { name: "Prometheus", icon: <SiPrometheus size={16} className="text-teal-500/80" /> },
  { name: "Grafana", icon: <SiGrafana size={16} className="text-teal-500/80" /> }
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-teal-500 selection:text-slate-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 py-24 flex flex-col justify-center min-h-[70vh]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4 text-teal-400 font-mono text-sm">
            <Terminal size={16} />
            <span>sysadmin@adeyomola:~$ whoami</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 tracking-tight">
            Adeyomola.<br />
            <span className="text-slate-500">Cloud & DevOps Engineer.</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-slate-400 mb-8 leading-relaxed">
            I architect, automate, and deploy scalable cloud infrastructure. Specializing in CI/CD, container orchestration, and infrastructure as code.
          </p>
          
          <div className="flex gap-4">
            <a href="https://github.com/Adeyomola" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-colors">
              <FaGithub size={24} />
            </a>
            {/* <a href="https://linkedin.com/in/adeyomola" target="_blank" rel="noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-colors">
              <FaLinkedin size={24} />
            </a> */}
            {/* <a href="mailto:your.email@example.com" className="p-3 bg-slate-900 border border-slate-800 rounded-lg hover:border-teal-400 hover:text-teal-400 transition-colors">
              <Mail size={24} />
            </a> */}
          </div>
        </motion.div>
      </header>

      {/* Infinite Skills Marquee */}
      <div className="border-y border-slate-900 bg-slate-950/50 py-6 overflow-hidden">
        <div className="flex w-max animate-marquee space-x-12 px-6">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-slate-400 font-mono text-lg shrink-0 hover:text-teal-400 transition-colors"
            >
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bento Grid Projects Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-center gap-2 mb-12 text-teal-400 font-mono text-sm">
          <Database size={16} />
          <span>sysadmin@adeyomola:~$ ls -la ./projects</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min md:auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              whileHover={{ y: -5 }}
              className={`group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-400/50 hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.15)] transition-all flex flex-col justify-between cursor-pointer ${project.colSpan}`}
            >
              <div className="relative">
                {/* Arrow icon that fades in on hover */}
                <ArrowUpRight className="absolute top-0 right-0 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
                
                {project.icon}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-mono text-teal-400/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="flex items-center gap-2 mb-12 text-teal-400 font-mono text-sm">
          <Database size={16} />
          <span>sysadmin@adeyomola:~$ ls -la ./technical-articles</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min md:auto-rows-[250px]">
          {writings.map((writing, index) => (
            <motion.a
              href={writing.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              whileHover={{ y: -5 }}
              className={`group p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-teal-400/50 hover:shadow-[0_0_30px_-5px_rgba(45,212,191,0.15)] transition-all flex flex-col justify-between cursor-pointer ${writing.colSpan}`}
            >
              <div className="relative">
                {/* Arrow icon that fades in on hover */}
                <ArrowUpRight className="absolute top-0 right-0 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
                
                {writing.icon}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-teal-400 transition-colors">{writing.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{writing.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {writing.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-mono text-teal-400/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

    </div>
  );
}
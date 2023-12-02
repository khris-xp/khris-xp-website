type TProject = {
    name: string;
    description: string;
    image: string;
    links: string;
    technologies: string[];
    position: string;
}

export const fetchProject = async (projects: TProject[]): Promise<TProject[]> => {
    return projects.slice(0, 6);
}
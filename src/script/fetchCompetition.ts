type TCompetition = {
    name: string;
    description: string;
    duration: string;
    location: string;
    position: string;
    image: string;
    link: string;
}

export const fetchCompetition = async (competition: TCompetition[]): Promise<TCompetition[]> => {
    return competition.slice(0, 6);
}
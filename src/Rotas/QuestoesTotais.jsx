import React, { useEffect, useState } from 'react';

export function QuestoesTotais() {
    const [totalDeQuestoes, setTotalDeQuestoes] = useState(0);

    useEffect(() => {
        fetch('https://opentdb.com/api_count_global.php')
            .then((res) => res.json())
            .then((data) => setTotalDeQuestoes(data.overall.total_num_of_questions));
    }, []);

    return (
        <section>
            Atualmente, há <span>{totalDeQuestoes}</span> questões disponíveis no site OpenTriviaDatabase.
        </section>
    );
}
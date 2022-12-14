const achivements = [
    { title: "Experience", subtitle: "1 year working", icon: "bx-award", index:1 },
    { title: "Completed", subtitle: "5 projects completed",  icon: "bx-briefcase-alt",index:2 },
    { title: "Learning", subtitle: "Constanly learning 24/7", icon: "bx-brain", index:3},
]

const Info = () => {
    return (
        <div className="about__info grid">
            {achivements.map(({ subtitle, icon, title, index }) => {
                return (
                    <div className="about__box" key={index}>
                        <i className={`bx ${icon} about__icon`}></i>
                        <h3 className="about__title">{title}</h3>
                        <span className="about__subtitle">{subtitle}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Info
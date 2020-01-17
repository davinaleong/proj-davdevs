import React from 'react';

function CategoryBadge(props) {
    const category = props.getCategory(props.project.category.type);

    return (
        <div className="text-center mb-3" style={{color: category.color}}>
            <span className="badge">
                <i className={category.icon}></i> {category.name}
            </span>
        </div>
    );
}

export default CategoryBadge;
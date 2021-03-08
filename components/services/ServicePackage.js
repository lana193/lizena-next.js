import React from 'react';
import styled from 'styled-components';

const accentColor = 'rgb(60,179,113)';
const textColor = '#2d3b48';
const planPadding = "1em";
const titleBackground = '#f3f3f3';
const titleSize = '1.45em';
const priceSize = '1.35em';
const featureSize = '1em';

const PackageLi = styled.li`
 
    padding: calc(${planPadding} / 2);

    ::before {
        content: url(${props => props.available ? '/doneServiceIcon.svg' : '/closeIcon.svg'});
        color: ${accentColor};
        display: inline-block; 
        width: 1.5em;
        margin-left: -1em
    }
`;

const PackageWrapper = styled.div`
    background: white;
    width: 20em;
    height: 100%;
    box-sizing: border-box;
    text-align: center;

    .header {
        background-color: ${titleBackground};
        padding: ${planPadding};
    
        h4 {
            font-size: ${titleSize};
            text-transform: uppercase;
            color: ${accentColor};
            font-weight: 700;
        }   
    }

    .body {
        padding: ${planPadding};
        color: ${textColor};
        box-sizing: border-box;

        .price {
            font-size: ${priceSize};
            padding: ${planPadding} 0;
            font-weight: 600;
            margin-top: 0;
            display: inline-block;
            width: 80%;

            p {
                font-size: ${priceSize};
                display: inline-block;
                margin: 0;

                span {
                    font-size: calc(${priceSize}*0.75);
                    display: inline-block;
                }
            }
        }
        
        .description {
            padding-bottom: ${planPadding};
            border-bottom: 2px solid ${titleBackground};
            margin: 0 auto;
            width: 90%;
            
            em {
                font-size: ${featureSize};
                font-weight: 500;
            }
        }
        
        .works-list {
            font-size: ${featureSize};
            list-style: none;
            padding-left: 0;

            // li { 
            //     padding: calc(${planPadding} / 2);
            // }

            // li::before {
            //     content: url(${doneIcon});
            //     color: ${accentColor};
            //     display: inline-block; 
            //     width: 1.5em;
            //     margin-left: -1em
            // }
        }
    }
`;

const ServicePackage = (props) => {
    const { name, price, description, worksAvl, worksClosed } = props;
    return (
        <PackageWrapper >
            <div className='header'>
                <h4>{name}</h4>
            </div>
            <div className='body'>
                <div className='price'>
                    <p>{price}<span>/м<sup>2</sup></span></p>
                </div>
                <p className='description'>
                    <em>{description}</em>
                </p>
                <ul className='works-list'>
                    {worksAvl && worksAvl.map((work, index) => {
                        return (
                            <PackageLi available key={index}>{work}</PackageLi>);
                        }
                    )}
                    {worksClosed && worksClosed.map((work, index) => {
                        return (
                            <PackageLi key={index}>{work}</PackageLi>);
                        }
                    )}
                </ul>
            </div>
        </PackageWrapper>
    );
}

export default ServicePackage;
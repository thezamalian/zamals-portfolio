import React from 'react';

// import myBg from '../../assets/my-bg.png';

const Home = () => {
    return (
        <div
            // className="bg-warning rounded d-md-flex p-2"
            id="home"
        // style={{ marginTop: '10%' }}
        >
            <header className="main-header">
                <h1><span>Zam Hos</span></h1>
                <p style={{ marginTop: '30px' }}>I don't know why the hell I love programming so much but I do feel it is kind of like
                    my soulmate.</p>

                <div className="d-flex justify-content-center ">
                    <form method="get"
                        action="https://drive.google.com/file/d/1Ci0bdkVgmriHJQxLXyUqjqHeYlqtpuJf/view?usp=sharing"
                        target="_blank"
                    >
                        <button type="submit" className="button mx-2"> Resume </button>
                    </form>
                    <a className="button mx-2" href="https://github.com/thezamalian" alt="..." target="_blank" rel="noreferrer">Github</a>
                    <a className="button mx-2" href="https://www.linkedin.com/in/the-zamalian/" alt="..." target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </header>

        </div>
    );
};

export default Home;
document.addEventListener('DOMContentLoaded', function () {
    const maze = document.getElementById('maze');
    let startSet = false;
    let endSet = false;
    let wallSet = false;
    // kol mra h3oz a3ml update lel buttons
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.dataset.row = i;
            cell.dataset.col = j;
            maze.appendChild(cell);
        }
    }
    maze.addEventListener('click', (e) => {
        const existingPath = maze.querySelectorAll('.path');
        existingPath.forEach(path => {
            path.classList.remove('path');
        });
        if (e.target.matches('div')) {
            if (startSet && !e.target.classList.contains('end') && !e.target.classList.contains('wall')) {
                const existingStart = maze.querySelector('.start');
                if (existingStart) {
                    existingStart.classList.remove('start');
                }
                e.target.classList.add('start');
                startSet = false;
            } else if (endSet && !startSet && !e.target.classList.contains('start') && !e.target.classList.contains('wall')) {
                const existingEnd = maze.querySelector('.end');
                if (existingEnd) {
                    existingEnd.classList.remove('end');
                }
                e.target.classList.add('end');
                endSet = false;
            } else if (wallSet && !e.target.classList.contains('start') && !e.target.classList.contains('end')) {
                e.target.classList.toggle('wall');
            }
        }
    });
    // reset 
    document.getElementById('reset').addEventListener('click', () => {
        const cells = maze.querySelectorAll('div');
        cells.forEach(cell => {
            cell.className = '';
        });
        startSet = false;
        endSet = false;
        wallSet = false;
    });
    //-----
    // start p
    document.getElementById('setStart').addEventListener('click', () => {
        startSet = true;
        endSet = false;
        wallSet = false;
    });
    //-----
    // end p
    document.getElementById('setEnd').addEventListener('click', () => {
        startSet = false;
        endSet = true;
        wallSet = false;
    });
    //-----
    // walls
    document.getElementById('setWall').addEventListener('click', () => {
        startSet = false;
        endSet = false;
        wallSet = true;
    });
    // algo
    document.getElementById('runAlgorithm').addEventListener('click', () => {
        // console.log('sh8al sh8al');
        dijkstra();
        //alert('Shortest Path Found'); r5ma fash5 mlhash lzma
        //if (dijkstra()) alert("Shortest Path Found");
        // else alert("Check your walls placement.")

    });

});

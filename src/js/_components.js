                
                
                
                
                
                const array = [2, 5, 6, 8, 2];

                const array2 = array.map(function (el) {
                    console.log(this);
                })

                console.log(array2);

import React,{createContext,useEffect,useState} from 'react';
import { useFetchGuarniciones } from '../hooks/useFetchGuarniciones';
import { useFetchMenu } from '../hooks/useFetchMenu';

export const MenuContextData=createContext();


export const MenuProvider=({children})=>{
    const [menus]=useFetchMenu();
    const [guarnicion]=useFetchGuarniciones();
    const [guarnicionGlobal, setGuarnicionGlobal] = useState([]);
    const [menuGlobal, setMenuGlobal] = useState([]);

    useEffect(() => {
      setMenuGlobal(menus);
      setGuarnicionGlobal(guarnicion);
    }, [menus,guarnicion])
    

    return(
        <MenuContextData.Provider value={{menuGlobal,guarnicionGlobal}}>
            {children}
        </MenuContextData.Provider>
    )
}
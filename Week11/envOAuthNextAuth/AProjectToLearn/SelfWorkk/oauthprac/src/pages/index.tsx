import { Button, Typography  } from "@mui/material"
import { useSession , signIn, signOut } from "next-auth/react"

export default function Home() {
    const session = useSession();
    
    return ( <>
        <div style={{height: 60, background: "white", padding: 10}} >
            {session.data && <div style={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant={"h4"} style={{color: "black"}}>
                {session.data.user?.email}
            </Typography>
            <div>
                <Button variant={"contained"} onClick={() => signOut()}>Logout</Button>
            </div>
            </div>
        }
        {!session.data && <div style={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant={"h4"} style={{color: "black"}}>
            Hii 
            </Typography>
            <div>
            <Button variant={"contained"} onClick={() => signIn()}>Sign up</Button>
            </div>
        </div>
        }
        </div> 
    </>
    )
}

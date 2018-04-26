import { User, UserRole } from 'app/models';


/**
 * User gates.
 */
export const USER_GATES = {

    /**
     * Determine whether the user can delete the user.
     */
    'destroy-user': (user: User, person: User): boolean => {
        return (user.role === UserRole.ADMINISTRATOR) &&
               (user.disabled_at === null);
    },


    /**
     * Determine whether the user can restore the user.
     */
    'restore-user': (user: User, person: User): boolean => {
        return (user.role === UserRole.ADMINISTRATOR) &&
               (user.disabled_at !== null);
    }

};

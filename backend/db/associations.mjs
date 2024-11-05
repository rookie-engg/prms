import Select from "./Models/Select.mjs";
import Length from "./Models/Length.mjs";
import Width from "./Models/Width.mjs";
import Angle from "./Models/Angle.mjs";
import SetCut from './Models/Production/SetCut.mjs';
import SetTyre from './Models/Production/SetTyre.mjs';
import RemainingCut from "./Models/Production/RemainingCut.mjs";
import RemainingTyre from "./Models/Production/RemainingTyre.mjs";
import './Models/Report.mjs';

Select.hasOne(Length);
Length.belongsTo(Select);

Select.hasOne(Width);
Width.belongsTo(Select);

Select.hasOne(Angle);
Angle.belongsTo(Select);

Select.hasOne(SetCut);
SetCut.belongsTo(Select);

Select.hasOne(SetTyre);
SetTyre.belongsTo(Select);

Select.hasOne(RemainingCut);
RemainingCut.belongsTo(Select);

Select.hasOne(RemainingTyre);
RemainingTyre.belongsTo(Select);

